---
path: "/software/mintpy"
date: "Nov 2017 - Jun 2019"
title: "MintPy"
slug: 'mintpy'
tags: ["Python", "CLI Tool", "Paralell"]
type: "Scientific Software Package"
status: "complete"
technologies: ["python", "Dask"]
image: "../../images/mintpy.png"
url: "https://mintpy.readthedocs.io/en/latest/"
repo: "https://github.com/insarlab/MintPy"
blurb: 'A python package for "Interferometric Synthetic Aperture Radar time series analysis".'
---

#### Project Overview
MintPy is a python package for "Interferometric Synthetic Aperture Radar time series analysis", authored by [Yunjun Zhang](https://github.com/yunjun) during his PhD at the University of Miami. The package reads a stack of interferograms and allows for easy plotting of surface ground displacements over time, enabling easier analysis.

#### My Contributions
I worked on the MintPy software while an undergraduate at the University of Miami. During that time, I worked  on a script to output the results of MintPy's correction algorithms as a KMZ file for display and analysis in GIS programs. Due to the large volume of data output by MintPy's processing algorithms, the output KMZ file had to allow for multiple levels of detail depending on the viewing height within the GIS application, in order to be useable. At the highest view heights, only a few points were shown, and at the lowest view heights, the entire dataset for certain regions was displayed. The script also enable users to click on indivdiual data points within the GIS application to view numerical data about the given location including the deformation velocity of the specific geographic point as well as the total amount of deformation.

Additionally, I significantly increased the speed of the various data processing routines by implementing a means to run the processing algorithms on chunks of data in parallel, rather than serially. The parallel processing was implemented using the open source [dask](https://docs.dask.org/en/latest/) library. The routines run in parallel on both local laptop and desktop machines, as well as on high end HPC clusters, through use of the cluster's job scheduling interface. The parallelization decreased runtime for one large dataset from ~4 hours to ~10 minutes **(a 25x speed increase)** on a 24-core computing cluster, and to ~1 hour **(a 4x speed increase)** on a 4-core local machine.

I also spent some limited time working on a GUI for the MintPy software, which runs entirely from the command line, but this project was eventually discarded in favor of other, more pressing, issues.

-----

###### MintPy Citation
Yunjun, Z., H. Fattahi, F. Amelung (2019), Small baseline InSAR time series analysis: Unwrapping error correction and noise reduction, _Computers & Geosciences_, 133, 104331, doi:[10.1016/j.cageo.2019.104331](https://doi.org/10.1016/j.cageo.2019.104331), [ArXiv](https://eartharxiv.org/9sz6m/).

###### Related Links

[Miami Geodesy Lab](https://www.geodesy.rsmas.miami.edu/)
 