from django.db import models
class Time(models.Model):
    hours = models.IntegerField()
    minutes = models.IntegerField()
    seconds = models.IntegerField()
    am_pm = models.CharField(max_length=2)
    timestamp = models.DateTimeField(auto_now_add=True)
