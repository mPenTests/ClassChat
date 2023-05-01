from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Message(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
    

class Group(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name="participants")
    messages = models.ManyToManyField(Message)

    def __str__(self):
        return self.name