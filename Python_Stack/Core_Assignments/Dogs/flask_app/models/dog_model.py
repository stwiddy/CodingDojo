from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import award_model
from flask import flash 
import re 
ALPHANUMERIC = re.compile(r"^[a-zA-Z0-9]+$") #NO SPECIAL CHARACTERS r or \n

class Dog: 
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.breed = data['breed']
        self.color = data['color']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


# Get all dogs (READ ALL METHOD)

    @classmethod
    def get_all(cls):
        query ="SELECT * FROM dogs;"
        results = connectToMySQL(DATABASE).query_db(query)
        print(results)
        all_dogs = []
        for row_from_db in results: 
            dog_instance =cls(row_from_db)
            all_dogs.append(dog_instance)
        return all_dogs


# #READ ONE
#     @classmethod
#     def get_one(cls, data):
#         query = "SELECT * FROM dogs WHERE id = %(id)s"
#         results = connectToMySQL(DATABASE).query_db(query, data)        READ ONE PRIOR TO ADDING AWARDS
#         # print(results)
#         if results:
#             dog_instance =cls(results[0])
#             return dog_instance
#         return results 


#READ ONE
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dogs LEFT JOIN awards ON awards.dog_id = dogs.id WHERE dogs.id = %(id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        # print(results)
        if results:
            dog_instance =cls(results[0])
            awards_list = []
            for row_in_db in results:
                print(row_in_db)
                award_data = {
                    'title': row_in_db['title'],
                    'dog_id': row_in_db['dog_id'],
                    'id': row_in_db['awards.id'],
                    'created_at': row_in_db['awards.created_at'],
                    'updated_at': row_in_db['awards.updated_at']
                }
                award_instance = award_model.Award(award_data)
                awards_list.append(award_instance)
            dog_instance.list_awards = awards_list 
            return dog_instance
        return results 

# Create 

    @classmethod
    def create(cls,data):
        query = "INSERT INTO dogs (name, color, breed) VALUES (%(name)s,%(color)s,%(breed)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

#update 
    @classmethod
    def update(cls,data):
        query = "UPDATE dogs SET name = %(name)s, color = %(color)s, breed = %(breed)s " \
            "WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)


#DELETE
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM dogs WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)


# Validator
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name']) < 1:
            is_valid = False 
            flash("Name must be provided")
        elif not ALPHANUMERIC.match(data['name']):
            flash("Name cannot contain special characters")
        if len(data['breed']) < 1:
            is_valid = False 
            flash("Breed must be provided")
        if len(data['color']) < 1:
            is_valid = False 
            flash("color must be provided")
        return is_valid