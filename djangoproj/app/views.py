from django.shortcuts import render
from django.http import JsonResponse

from app.models import Time

def submit_custom_time(request):
    if request.method == 'POST':
        # Retrieve custom time data from the request
        hours = request.POST.get('hours')
        minutes = request.POST.get('minutes')
        seconds = request.POST.get('seconds')
        am_pm = request.POST.get('am_pm')

        # Save custom time to the database
        custom_time = Time(hours=hours, minutes=minutes, seconds=seconds, am_pm=am_pm)
        custom_time.save()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})
