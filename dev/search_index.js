var documenterSearchIndex = {"docs":
[{"location":"#Omniscape.jl-1","page":"Home","title":"Omniscape.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A package to compute omnidirectional landscape connectivity.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Package repository: https://github.com/Circuitscape/Omniscape.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nThis package is currently in the early stages of development. Please test it out and post issues to the GitHub repo with any bugs, feature requests, or questions.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Pkg; Pkg.add(\"Omniscape\")","category":"page"},{"location":"#Overview-1","page":"Home","title":"Overview","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package implements the omnidirectional connectivity algorithm developed by McRae et al. (2016). Omniscape.jl is a moving window implementation of Circuitscape.jl (Anantharaman et al. 2019). Circuitscape.jl applies circuit theory to make spatially-explicit predictions of connectivity using concepts developed by McRae (2006) and McRae et al. (2008).","category":"page"},{"location":"#Citing-Omniscape.jl-1","page":"Home","title":"Citing Omniscape.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A formal paper detailing Omniscape.jl is forthcoming, but until it is published, please use the something like the following to cite Omniscape.jl if you use it in your work:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Landau, VA 2020. Omniscape.jl: An efficient and scalable implementation of the Omniscape algorithm in the Julia scientific computing language, vX.Y.Z, URL: https://github.com/Circuitscape/Omniscape.jl, DOI: 10.5281/zenodo.3406711.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Here's a bibtex entry:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"@misc{landau2020omniscape,\n    title = {{Omniscape.jl: An efficient and scalable implementation of the Omniscape algorithm in the Julia scientific computing language}},\n    author = {Vincent A. Landau},\n    year = {2020},\n    version = {v0.1.4},\n    url = {https://github.com/Circuitscape/Omniscape.jl},\n    doi = {10.5281/zenodo.3406711}\n}","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Please also cite the original work outlining the Omniscape algorithm:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"McRae, B. H., K. Popper, A. Jones, M. Schindel, S. Buttrick, K. R. Hall, R. S. Unnasch, and J. Platt. 2016. Conserving Nature’s Stage: Mapping Omnidirectional Connectivity for Resilient Terrestrial Landscapes in the Pacific Northwest. The Nature Conservancy, Portland, Oregon. ","category":"page"},{"location":"#References-1","page":"Home","title":"References","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"[1] Anantharaman, R., Hall, K., Shah, V., & Edelman, A. (2019). Circuitscape in Julia: High Performance Connectivity Modelling to Support Conservation Decisions. arXiv preprint arXiv:1906.03542.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[2] McRae, B. H. (2006). Isolation by resistance. Evolution, 60(8), 1551-1561.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[3] McRae, B. H., Dickson, B. G., Keitt, T. H., & Shah, V. B. (2008). Using circuit theory to model connectivity in ecology, evolution, and conservation. Ecology, 89(10), 2712-2724.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[4] McRae, B. H., Popper, K., Jones, A., Schindel, M., Buttrick, S., Hall, K., Unnasch, B. & Platt, J. (2016). Conserving nature’s stage: mapping omnidirectional connectivity for resilient terrestrial landscapes in the Pacific Northwest. The Nature Conservancy, Portland, Oregon.","category":"page"},{"location":"usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#Running-Omniscape-1","page":"Usage","title":"Running Omniscape","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"To use Omniscape, simply run the following Julia code after Omniscape.jl has been installed.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using Omniscape\nrun_omniscape(\"path/to/config/file.ini\")","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"file.ini is a file specifying input data paths and options for Omniscape. See this link for an example .ini file. The arguments specified in the .ini file are described in detail below.","category":"page"},{"location":"usage/#Parallel-Processing-1","page":"Usage","title":"Parallel Processing","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Omniscape uses parallel processing by default, but currently, Julia requires that the number of parallel threads to use be specified outside of via an environment variable called JULIA_NUM_THREADS. This environment variable needs to be defined prior to launching Julia from the terminal.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Example to set up Julia with 4 threads:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"On Linux/Mac:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"export JULIA_NUM_THREADS=4\njulia","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"On Windows:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"set JULIA_NUM_THREADS=4\njulia","category":"page"},{"location":"usage/#Arguments-1","page":"Usage","title":"Arguments","text":"","category":"section"},{"location":"usage/#Required-1","page":"Usage","title":"Required","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"resistance_file: The path to the resistance layer input. This file can be in ASCII (.asc) or GeoTiff (.tif) format. If the file is in .asc format, Omniscape will also detect any use any associated .prj file in the same directory to determine the projection of the input file. The same applies for all other inputs described below that may be in .asc  format.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"radius: A positive integer specifying the radius in pixels of the moving window used to identify sources to connect to each target.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"block_size: An odd integer. Defaults to 1. An odd, positive integer specifying the side length for source layer blocking in target generation.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"project_name: The name of the project. Omniscape will create a directory called project_name and write any outputs to that directory.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"If source_from_resistance (described below) is false:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"source_file: The path to the source layer input. Must be an ASCII or GeoTIFF. This raster must have the same dimensions as resistance_file, and it is recommended that they have the exact same projection to ensure proper alignment. NoData values will be assigned a source strength of 0.  Does not need to be provided if source_from_resistance = true.","category":"page"},{"location":"usage/#Optional-1","page":"Usage","title":"Optional","text":"","category":"section"},{"location":"usage/#General-options-1","page":"Usage","title":"General options","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"source_from_resistance: One of true, false. Should a source layer be derived using the resistance layer? If true, sources are calculated as the inverse of the resistance layer, and therefore it is not recommended that your resistance layer contain values less than 1. Sources will be set to 0 for all cells with a resistance greater than r_cutoff. Defaults to false.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"resistance_file_is_conductance: One of true, false. Defaults to false. Specify whether the file specified by resistance_file is a conductance (rather than resistance) surface. Conductance is the inverse of resistance. Note that r_cutoff (an optional argument described below) must be in units of resistance even if a conductance file is supplied as input.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"buffer: A positive integer. Defaults to 0. Specifies an additional buffer distance beyond radius to clip the resistance and source layers to for each moving window iteration. If 0, resistance and source layers will be clipped to a circle of size radius for each moving window iteration. ","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"source_threshold: Positive number. Defaults to 0. Only pixels in the source layer greater than source_threshold will be included as sources.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"calc_normalized_current: One of true, false. Defaults to false. Specify whether to calculate normalized current flow. Normalized current is calculated as raw current divided by flow potential. If true, a normalized current flow raster will be written to the project_name directory.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"calc_flow_potential: One of true, false. Defaults to false. Specify whether to calculate flow potential. Flow potential calculates current flow in \"null\" conditions, where the resistance of the entire landscape is 1. If true, a flow potential raster will be calculated and written to the project_name directory. This can still be set to false even if calc_normalized_current = true if you want to avoid writing the flow potential raster to disk.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"allow_different_projections: One of true, false. Defaults to false. If true, warnings about non-matching projections are suppressed.","category":"page"},{"location":"usage/#Parallel-processing-options-1","page":"Usage","title":"Parallel processing options","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"parallelize: One of true, false. Defaults to true. Specify whether to use parallel processing.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"parallel_batch_size: Integer. Defaults to 10. The batch size (number of jobs) to send to each parallel worker. Particularly in cases where single solves are very fast, setting this to a larger number can reduce I/O overhead when scheduling/sending jobs to parallel workers. If set too high, then you will not be fully utilizing parallel workers.","category":"page"},{"location":"usage/#Output-options-1","page":"Usage","title":"Output options","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"write_raw_currmap: One of true, false. Defaults to true. Save the raw cumulative current map to disk? Should always be set to true unless calc_flow_potential, calc_normalized_current, or both are true and you do not need the raw current output.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"mask_nodata: One of true, false. Defaults to true. Specify whether to mask current flow outputs according to NoData values in resistance surface. (i.e. pixels in current flow outputs that line up with NoData values in resistance are set to no data if mask_nodata = true).","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"write_as_tif: One of true, false. Defaults to true. Should outputs be written in tif format? If false, outputs are written in .asc format.","category":"page"},{"location":"usage/#Conditional-connectivity-options-1","page":"Usage","title":"Conditional connectivity options","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"conditional: One of true, false. Defaults to false. Should conditional source/target matching be uses? That is, should a given target only be connected to sources that are meet similarity conditions to the target? If false, none of the arguments described bellow are needed. If true, then gridded data with values for each pixel are used to compare targets and sources and determine which pairs should be connected according to user-specified criteria. ","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"n_conditions: One of 1, 2. Defaults to 1. The number of conditions that must be met for conditional source/target matching. Only applies if conditional = true.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"If n_conditions = 1:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition1_file: The file path to the data representing condition one in present day. Only needed if conditional = true. Must be an ASCII or GeoTIFF. This raster must have the same dimensions as resistance_file, and it is recommended that it also has the exact same projection to ensure proper alignment.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"comparison1: One of within or equal. Defaults to within. Only applies if conditional= true. How should conditions be compared when determining whether to connect a source/target pair. If within, then the value of condition 1 for the source must be within the following range, where target is the value at the target pixel or block: (target + condition1_lower, target + condition1_upper).  condition1_lower and condition1_upper are explained further below. If equal, then the value at the source pixel must be equal to the value at the target pixel.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition1_lower: Number. Only required if comparison1 = within. If condition1_lower = -1, then a source may have a condition 1 value up to 1 unit smaller than the target's value to be connected.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition1_upper: Number. Only required if comparison1 = within. If condition1_upper = 1, then a source may have a condition 1 value up to 1 unit larger than the target's value and it will still be connected.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"If n_conditions = 2:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition2_file: The file path to the data representing condition two in present day. Only needed if conditional = true and n_conditions = 2. Must be an ASCII or GeoTIFF. This raster must have the same dimensions as resistance_file, and it is recommended that it also has the exact same projection to ensure proper alignment.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"comparison2: One of within or equal. Defaults to within. Only applies if conditional= true and n_conditions = 2. How should conditions be compared when determining whether to connect a source/target pair. If within, then the value of condition 2 for the source must be within the following range, where target is the value at the target pixel or block: (target + condition2_lower, target + condition2_upper).  condition2_lower and condition2_upper are explained further below. If equal, then the value at the source pixel must be equal to the value at the target pixel.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition2_lower: Number. Only required if n_conditions = 2 and comparison1 = within. If condition2_lower = -1, then a source may have a condition 2 value up to 1 unit smaller than the target's value and it will still be connected.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition2_upper: Number. Only required if n_conditions = 2 and comparison1 = within. If condition2_lower = 1, then a source may have a condition 2 value up to 1 unit larger than the target's value and it will still be connected.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Using future conditions:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"compare_to_future: One of none, 1, 2, or both. Which condition(s) should compare the future condition in targets with present-day conditions in sources when determining which pairs to connect? For any condition(s) specified in this argument, two data layers are needed: one with future condition values for all pixels in the study area, and one for present day condition values for all pixels in the study area. Defaults to \"none\".","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition1_future_file: The file path to the data representing condition one in the future. Only needed if conditional = true and compare_to_future = 1 or compare_to_future = both. Must be an ASCII or GeoTIFF. This raster must have the same dimensions as resistance_file, and it is recommended that they have the exact same projection to ensure proper alignment.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"condition2_future_file: The file path to the data representing condition two in the future. Only needed if conditional = true and n_conditions = 2 and compare_to_future = 2 or compare_to_future = both. Must be an ASCII or GeoTIFF. This raster must have the same dimensions as resistance_file, and it is recommended that they have the exact same projection to ensure proper alignment.","category":"page"}]
}
