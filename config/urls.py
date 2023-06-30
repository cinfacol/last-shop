from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path("supersecret/", admin.site.urls),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.jwt")),
    path("api/profile/", include("apps.profiles.urls")),
    path("api/products/", include("apps.products.urls")),
    path("api/ratings/", include("apps.ratings.urls")),
    path("api/enquiries/", include("apps.enquiries.urls")),
]

admin.site.site_header = "Last Shop Admin"
admin.site.site_title = "Last Shop Admin Portal"
admin.site.index_title = "Welcome to the Last Shop Portal"
