from rest_framework import serializers
from app.models import *

class TimeEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeEntry
        fields = ['hour','minute','ampm']
