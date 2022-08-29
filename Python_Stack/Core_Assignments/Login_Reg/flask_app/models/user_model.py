from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE 
from flask import flash
import re
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results =  connectToMySQL(DATABASE).query_db(query,data)
        if (results):
            return cls(results[0])
        return False
    


    @staticmethod
    def validate(user_data):
        is_valid = True
        if len(user_data['first_name']) < 2:
            flash("first name must be at least 2 characters","reg")
            is_valid = False
        if len(user_data['last_name']) < 2:
            flash("last name must be at least 2 characters","reg")
            is_valid = False
        if len(user_data['email']) < 1:
            flash("Please provide your email","reg")
            is_valid = False
        elif not EMAIL_REGEX.match(user_data['email']):
            is_valid = False
            flash("invalid email","reg")
        else:
            data = {
                'email' : user_data ['email']
            }
            potential_user = User.get_by_email(user_data['email'])
            if potential_user: #if we have a user, don't let them register with this email
                is_valid = False
                flash("Email already in DB, hope it's you..")
        if len(user_data['password']) < 8:
            flash("Password must be at least 8 chars", "reg")
            is_valid = False
        elif not user_data['password'] == user_data['confirm_pass']:
            flash("Passwords don't match", "reg")
            is_valid = False
        return is_valid