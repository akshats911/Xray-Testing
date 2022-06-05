from operator import index
from django.urls import path
# from . import views
from . import views
from .views import Index, AddPost


urlpatterns = [
    # path('', views.home, name="home"),
    path('', Index.as_view(),name="blog-home"),
    path('add_post/',AddPost.as_view(), name="add-post"),
    path('X-ray',views.home, name="home"),
]