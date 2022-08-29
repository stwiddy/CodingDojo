from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.dog_model import Dog


# READ ALL ROUTE 
@app.route("/")
def index():
    all_dogs = Dog.get_all()
    return render_template("index.html", dogs = all_dogs)

#READ ONE
@app.route("/dogs/<int:id>")
def display_one(id):
    data = {
        "id":id
    }
    dog = Dog.get_one(data)
    return render_template("one_dog.html", dog=dog)

# CREATE A DOG 
@app.route("/dogs/new") #Display route to render the form 
def new_dog_form():
    return render_template("new_dog.html")

@app.route("/dogs/create", methods=['POST']) #Action route to actually create the dog in Database
def create_dog():
    if not Dog.validate(request.form):
        return redirect('/dogs/new')
    Dog.create(request.form)
    return redirect("/")

#UPDATE A DOG
@app.route("/dogs/<int:id>/edit") #Display the edit form
def edit_form_dog(id):
    data = {
        "id":id
    }
    dog = Dog.get_one(data)
    return render_template("edit_dog.html", dog=dog)

@app.route("/dogs/<int:id>/update", methods = ['POST']) #update entries
def update_dog(id):
    data ={
        "name" : request.form ['name'],
        "breed" : request.form ['breed'],
        "color" : request.form ['color'],
        "id": id
    }
    if not Dog.validate(data):
        return redirect(f"/dog/{id}/edit")
    Dog.update(data)
    return redirect("/")

#DELETE A DOG
@app.route("/dogs/<int:id>/delete")
def delete_dog(id):
    data = {
        "id":id
    }
    Dog.delete(data)
    return redirect("/")