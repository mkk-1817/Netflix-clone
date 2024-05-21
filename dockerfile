# Use Nginx as a lightweight web server
FROM nginx:alpine


# Copy the content of the src directory to the default Nginx public folder
COPY src/ /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80
