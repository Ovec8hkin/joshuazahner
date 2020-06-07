---
path: "/research/miami-geodesy-lab"
date: "Nov 2017 - present"
title: "University of Miami Geodesy Lab"
slug: 'miami-geodesy-lab'
tags: ["geology", "geodesy", "software", "python"]
image: "../../images/hazards-site.png"
url: "https://rsmas-insar.readthedocs.io/en/latest/"
blurb: "An automated data download and analysis pipeline for remote geodetic InSAR data."
---

#### University of Miami Geodesy Lab
The [University of Miami Geodesy Lab](https://geodesy.rsmas.miami.edu/index.html), run by Dr. Falk Amelung, utilizes satellite derived Interferometric Synthetic Aperture Radar (InSAR) data to study crustal deformation processes. The lab currently studies active volcanoes, active plate tectonics, glacial isostatic adjustments, and land subsidence. During my time with the lab from November 2017 to present, I have worked on developing several different software packages to aid in the processing and visualziation of geodetic InSAR data to improve the lab's data analysis capabilities. 

#### [MintPy](/software/mintpy)

MintPy is a python package for "Interferometric Synthetic Aperture Radar time series analysis", authored by [Yunjun Zhang](https://github.com/yunjun) during his PhD at the University of Miami. The package reads a stack of interferograms and allows for easy plotting of surface ground displacements over time, enabling easier analysis. I spent significant time parallelizing various parts of the MintPy processing pipeline using the dask library on several HPC clusters, as well as adding scripts to export MintPy data into performant KMZ files for use by GIS applications.

#### [MinSAR](/software/minsar)
MinSAR is an open-source python package for the processing and analysis of Interferometric Synthetic Aperture Radar data. The software is intended to be run on a high performance computing or supercomputer cluster, and facilitates the automatic download and processing of remote InSAR data, allowing for scientists to spend more time analyzing the data. I have worked on the MinSAR software package since 2018, while a student at RSMAS. I have spent significant time working on automating the downloading of data from remote satellite facilities as well as automating the entire processing routine -- from data download to analysis processing - on our available supercomputing cluster. In addition to these, I also developed a [web application](/software/miami-insar-hazards-portal) which automatically displays the processed data images online for users to view and download.

 