import imp
from re import template
from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from .models import Post
from .forms import PostForm 

def home(request):
    return render(request, 'index.html',{})

class Index(ListView):
    model = Post
    template_name = 'bloghome.html'

class AddPost(CreateView):
    model = Post
    form_class = PostForm
    template_name = "add_post.html"
    # fields = "__all__"

# class HomePage():
#     template_name = 'index.html'
