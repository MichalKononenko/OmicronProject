from django.shortcuts import render_to_response


def cover(request):
    return render_to_response('cover/cover.html')


def dashboard(request):
    return render_to_response('dashboard/dashboard.html')


def userdash(request):
    return render_to_response('userdash/userdash.html')
