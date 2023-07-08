from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world!")

def api_view(request):
    return HttpResponse("API view")