from flask_app import app
from flask import render_template, redirect, session, request
from flask_app.models.dog_model import Dog
from flask_app.models.award_model import Award

@app.route("/awards/new") #Display the new award form
def new_award_form():
    all_dogs = Dog.get_all()
    return render_template("new_award.html", all_dogs=all_dogs)

@app.route("/awards/create", methods=['POST']) #ADD THE AWARD AND REDIRECT TO DOGS VIEW PAGE
def create_award():
    Award.create(request.form)
    return redirect(f"/dogs/{request.form['dog_id']}")

@app.route("/awards")
def all_awards():
    awards = Award.get_all_with_recipient()
    return render_template("all_awards.html", awards = awards)