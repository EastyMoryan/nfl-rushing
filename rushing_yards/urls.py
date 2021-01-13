from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='stats_table'),
    path('stats_data.json', views.stats_data_as_json, name='stats_data'),
]
