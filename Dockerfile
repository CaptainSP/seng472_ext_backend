# download node 22
FROM node:12

# copy the package.json and package-lock.json
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the rest of the files
COPY . .

# expose the port
EXPOSE 3000

# start the app