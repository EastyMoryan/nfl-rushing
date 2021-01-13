from django.http import HttpResponse, JsonResponse
from django.template import loader
import json
import os


def index(request):
    template = loader.get_template('rushing_yards/stats_table.html')
    return HttpResponse(template.render({}, request))


def stats_data_as_json(request):
    datapath = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'rushing.json')
    with open(datapath) as my_file:
        response_data = json.loads(my_file.read())
    return JsonResponse(response_data)
