from rest_framework.decorators import api_view
from rest_framework.response import Response
from app.models  import TimeEntry
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from app.serializer import TimeEntrySerializer

@api_view(['GET','POST'])

def create_time_entry(request):
   if request.method == 'GET':
        # Handle GET request
        # Retrieve existing time entries or return an empty response
        time_entries = TimeEntry.objects.all()
        # ... perform any necessary operations

        # Return the serialized data or an empty response
        serializer = TimeEntrySerializer(time_entries, many=True)
        return Response(serializer.data)
   elif request.method == 'POST':
        # Handle POST request
        hour = request.data.get('hour')
        minute = request.data.get('minute')
        ampm = request.data.get('ampm')

        # Create a new TimeEntry instance
        time_entry = TimeEntry(hour=hour, minute=minute, ampm=ampm)
        time_entry.save()
        return Response("Time entry created", status=201)
   
   
