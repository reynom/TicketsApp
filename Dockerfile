#  Base image with node npm
FROM node:18-alpine
#  Make working directory
RUN mkdir -p /app
WORKDIR /app
# Copy contents to directory
COPY . .
# Install dependencies
RUN npm install
# Build
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]





# CMD npm run dev