from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import recepie_model
from flask_app import DATABASE
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")
LETTER_REGEX = re.compile(r'^[a-zA-Z]+$')

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
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s,NOW(),NOW())"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])
    
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @staticmethod
    def validate_form(form):
        is_valid = True
        # email already exist
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(DATABASE).query_db(query,form)
        if len(results) >= 1:
            flash("Email already registered.", "err_email")
            is_valid = False
        # email doesn't match
        elif not EMAIL_REGEX.match(form['email']): 
            flash("Invalid email address!", "err_email")
            is_valid = False
        # first_name too short and not only letters
        if len(form['first_name']) < 2:
            flash("First Name must be at least 2 characters.", "err_first_name")
            is_valid = False
        elif  not LETTER_REGEX.match(form['first_name']):
            flash("First Name must contain only character", "err_first_name")
            is_valid = False
        # last_name too short 
        if len(form['last_name']) < 2:
            flash("Last Name must be at least 2 characters.", "err_last_name")
            is_valid = False
        # password too short 
        if len(form['password']) < 8:
            flash("Password must be at least 8 characters", "err_password")
            is_valid = False
        # password doesn't match confirmation
        elif form['password'] != form['confirm_password']:
            flash("Confirmation doesn't match password", "err_confirm_password")
            is_valid = False
        # password doesn't match REGEX
        elif not PASSWORD_REGEX.match(form['password']): 
            flash("Invalid password! Must be 8 characters with minimum one uppercase", "err_password")
            is_valid = False
        # return statment 
        return is_valid
