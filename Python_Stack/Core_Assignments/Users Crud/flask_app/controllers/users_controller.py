from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.user_model import User

# GRAB ALL USERS 

@app.route("/")
def index():
    all_users = User.get_all()
    return render_template("index.html", users = all_users)

# GRAB ONE USER 

@app.route("/users/<int:id>")
def display_one(id):
    data = {
        "id":id
    }
    user = User.get_one(data)
    return render_template("user.html", user=user)

# EDIT FORM 

@app.route("/users/<int:id>/edit") #Display the edit form
def edit_form(id):
    data = {
        "id":id
    }
    user = User.get_one(data)
    return render_template("edit_user.html", user=user)

# MAKE EDIT FORM WORK 

@app.route("/users/<int:id>/update", methods = ['POST']) #update entries
def update_user(id):
    data ={
        "first_name" : request.form ['first_name'],
        "last_name" : request.form ['last_name'],
        "email" : request.form ['email'],
        "id": id
    }
    User.update(data)
    return redirect("/")

# DELETE 

@app.route("/users/<int:id>/delete")
def delete_user(id):
    data = {
        "id":id
    }
    User.delete(data)
    return redirect("/")


# LOGIN PAGE 

@app.route("/user/new") #Display route to render the form 
def new_user_form():
    return render_template("indexA.html")

@app.route("/users/create", methods=['POST']) #Action route to actually create the dog in Database
def create_user():
    User.create(request.form)
    return redirect("/")