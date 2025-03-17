# Use an official Nginx image
FROM nginx:alpine

# Copy our custom Nginx config
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# Copy static files to Nginx HTML directory
COPY src /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
