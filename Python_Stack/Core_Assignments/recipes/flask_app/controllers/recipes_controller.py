from crypt import methods
from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models import recipes_model, user_model


@app.route("/add_recipe")
def add_recipe():
    if not "id" in session:
        print("you are not ins session")
        return redirect('/')
    user = user_model.User.get_by_id({'id':session['id']})
    return render_template('create_recipe.html', user=user)


@app.route("/create_recipe", methods=['POST'])
def create_recipe():
    if not "id" in session:
        return redirect('/')
    if not recipes_model.Recipe.validate_form(request.form):
        return redirect('/add_recipe')
    data = {
        'name': request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'date': request.form['date'],
        'under_30_min': request.form['under_30_min'],
        'user_id': session['id']
    }
    recipes_model.Recipe.save(data)
    return redirect('/recipes')

@app.route("/recipes/<int:id>/edit")
def edit_one(id):
    if not "id" in session:
        return redirect('/')
    data = {
        "id": id
    }
    recipe = recipes_model.Recipe.read_one(data)
    return render_template("edit_recipe.html", recipe=recipe)


@app.route("/recipes/<int:id>/update", methods=["POST"])
def update_recipe(id):
    if not "id" in session:
        return redirect('/')
    if not recipes_model.Recipe.validate_form(request.form):
        return redirect(f'/recipes/{id}/edit')  
    data ={
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "date": request.form['date'],
        "under_30_min": request.form['under_30_min'],
        "id": id
    }
    recipes_model.Recipe.udpdate(data)
    return redirect("/recipes")


@app.route("/recipe/<int:id>")
def display_one(id):
    if not "id" in session:
        return redirect('/')
    data = {
        "id" : id
    }
    recipe = recipes_model.Recipe.read_one(data)
    user = user_model.User.get_by_id({'id':session['id']})
    return render_template("one_recipe.html", recipe=recipe, user=user)

@app.route("/recipes/<int:recipe_id>/delete")
def delete_recipe(recipe_id):
    if not "id" in session:
        return redirect('/')
    data = {
        "id": recipe_id
    }
    to_be_deleted = recipes_model.Recipe.read_one(data)
    if not session['id'] == to_be_deleted.user_id:
        flash("You are not allowed to delete other people recipe")
        return redirect("/")
    recipes_model.Recipe.delete(data)
    return redirect("/recipes")



