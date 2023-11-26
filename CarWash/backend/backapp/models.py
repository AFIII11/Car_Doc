from django.db import models
# Create your models here.
class login(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class register(models.Model):
    name=models.CharField(max_length=30)
    lastName=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    log_id=models.ForeignKey(login,on_delete=models.CASCADE)

class booking(models.Model):
   
     
    name=models.CharField(max_length=30)
    phone=models.CharField(max_length=30)
    category=models.ManyToManyField('tag',blank=True)    
    date=models.CharField(max_length=30)
    time=models.CharField(max_length=30)
    log_id=models.ForeignKey(login,on_delete=models.CASCADE)

class tag(models.Model):
    name=models.CharField(max_length=200)
    created=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

