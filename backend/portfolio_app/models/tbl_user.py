from datetime import datetime
from portfolio_app import db


class User(db.Model):
    __tablename__ = "tbl_user"
    ccn_user = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email_user = db.Column(db.String(100), unique=True, nullable=False)
    password_user = db.Column(db.String(300), nullable=False)
    display_name = db.Column(db.String(100))
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now)

    posts = db.relationship("Post", backref="tbl_user.ccn_user", lazy=True)
    comments = db.relationship("Comment", backref="tbl_comment.ccn_comment", lazy=True)

    def __init__(
        self,
        username,
        email_user,
        password_user,
        display_name=None,
        bio=None,
    ):
        self.username = username
        self.email_user = email_user
        self.password_user = password_user
        self.display_name = display_name
        self.bio = bio

    def choice_query():
        return User.query

    def __repr__(self):
        return f"User: {self.email_user}"
