#Base image definition
FROM node:latest 

#Javascript adding
ADD fortune_generator.js /fortune_generator.js 

#Port exposure
EXPOSE 8080 

#Run-image command
ENTRYPOINT ["node", "fortune_generator.js"]
