from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_exempt


@xframe_options_exempt
def iframe(request, page):
    if request.method != 'GET':
        return HttpResponseBadRequest()

    return render(request, f'spa/{page}.html')


def index(request):
    if request.method != 'GET':
        return HttpResponseBadRequest()

    return render(request, 'spa/layout.html', {'page': 'home'})

def page(request, page):
    pages = {'about', 'songs', 'rates', 'contact'}

    if request.method != 'GET' or page not in pages:
        return HttpResponseBadRequest()

    return render(request, 'spa/layout.html', {'page': page})
