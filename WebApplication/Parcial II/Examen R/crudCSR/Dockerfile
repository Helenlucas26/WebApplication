FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
EXPOSE 4000
ENTRYPOINT [ "npm", "start"]