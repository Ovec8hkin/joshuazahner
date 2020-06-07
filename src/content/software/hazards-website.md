---
path: "/software/miami-insar-hazards-portal"
date: "Jan 2019 - present"
title: "Miami InSAR Lab Hazards Data Portal"
slug: 'miami-insar-hazards-portal'
tags: ["python", "react", "flask", "api"]
type: "Website"
status: "ongoing"
technologies: ["Python", "React", "API"]
image: "../../images/hazards-site.png"
url: "http://rsmasgeohazards.com"
repo: "https://github.com/geodesymiami/hazards-website"
blurb: "An web application displaying the image results of an automated InSAR processing system."
---

#### Project Overview
This website acts as the front-facing portal for the [MinSAR](/software/minsar) software package. It displays the final processed InSAR images of various volcanic systems around the world in an easy to use grid format, facilitating the analysis and comparison of volcanos through time. The site permits users to quickly find a volcanic system of interest through either a datatable or map view, and then quickly filter the available images for that volcano by image type or a date range. The images are additionally available for download either as raw .tiff files (for additional processing), or as processing JPEG files.  

#### My Contributions
This site required the development of three distinct parts, all of which I had a hand in planning and implementing. 

**Image Processing Routine** - Firstly, this project required the creation of an image processing pipeline that could read in raw, processed GeoTIFF images (the fina outputs of the MinSAR processing routine) and generate JPEG files that include the image data added to the physical image. The processed images then needed to be added to a remote filesystem and record of the images had to be added to a backend image database.

**Image Access API** - With the images stored in a backend database, a REST API was then created for the frontend website to query data from. The API was implemented using Flask and exposed endpoints that allowed for querying the database for images based on a set of filters passed during the API request.

**Frontend React Website** - The fontend website was implemented in React and consumes the various REST endpoints implemented as a part of the Image Access API. The website allows users to find volcanic systems using a web map as well as a traditional datatable, and then filter the available images using a simple query form. The site is styled using bootstrap and deployed on a custom computing allocation. 