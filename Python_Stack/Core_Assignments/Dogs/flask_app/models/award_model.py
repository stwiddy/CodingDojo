from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import dog_model

class Award:
    def __init__ (self, data):
        self.id = data['id']
        self.title = data['title']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dog_id = data['dog_id']


    @classmethod
    def create(cls,data):
        query = "INSERT INTO awards (title, dog_id) VALUES (%(title)s,%(dog_id)s);"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_all_with_recipient(cls):
        query = "SELECT * FROM awards JOIN dogs ON awards.dog_id = dogs.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            awards = []
            for row in results:
                print(results)
                award_instance = cls(row)
                recipient_data = {
                    **row,
                    'id': row['dogs.id'],
                    'created_at': row['dogs.created_at'],
                    'updated_at': row['dogs.updated_at']
                }
                dog_instance = dog_model.Dog(recipient_data)
                award_instance.recipient = dog_instance
                awards.append(award_instance)
            return awards
        return results 
