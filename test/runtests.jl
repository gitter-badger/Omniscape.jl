using Test, Omniscape, Circuitscape

### Unit tests for components
## source target matching
source_subset = [1.0 1 1 1 1 1 1 1 1 1; # 6x10 array
                   1 1 1 1 1 1 1 1 1 1;
                   1 1 1 1 1 1 1 1 1 1;
                   1 1 1 1 1 1 1 1 1 1;
                   1 1 1 1 1 1 1 1 1 1;
                   1 1 1 1 1 1 1 1 1 1]

con1pres =   [1.0 4 3 2 7 6 9 2 3 0;
                4 2 6 5 3 9 4 5 3 3;
                1 1 5 2 7 7 8 8 9 1;
                8 7 6 5 5 5 0 0 1 1;
                3 5 4 4 4 8 5 0 1 8;
                1 2 8 2 1 6 5 5 8 7]

con1fut =   [2.0 1 3 2 7 6 7 1 3 0;
               4 2 4 5 3 9 4 5 5 3;
               3 8 3 2 6 3 8 5 9 1;
               8 7 6 5 1 5 0 0 1 1;
               3 1 4 5 4 8 5 7 1 8;
               5 2 3 2 1 6 4 5 3 7]
x = 5
y = 4
con1_lower = -1.0
con1_upper = 1.0
Omniscape.source_target_match!(source_subset,
                     1,
                     con1pres,
                     con1fut,
                     Array{Float64, 2}(undef, 1, 1),
                     Array{Float64, 2}(undef, 1, 1),
                     "within",
                     "within",
                     con1_lower, # lower bound to be within for comparisome
                     con1_upper,
                     0.0,
                     0.0,
                     y,
                     y,
                     x,
                     x,
                     1,
                     6,
                     1,
                     10
                     )
target_val = con1fut[y, x]
# Make sure no present day vals in con1 are outside of range
@test sum((con1pres[source_subset .== 1] .< (target_val + con1_lower)) .|
    (con1pres[source_subset .== 1] .> (target_val + con1_upper))) == 0
@info "conditional connectivity tests passed"

## Check that targets are IDed properly
sources_raw = Circuitscape.read_raster("input/source.asc", Float64)[1]
int_arguments = Dict{String, Int64}()
int_arguments["block_size"] = 7
int_arguments["block_radius"] = 3 # must be (size - 1) / 2
int_arguments["nrows"] = size(sources_raw)[1]
int_arguments["ncols"] = size(sources_raw)[2]
targets = Omniscape.get_targets(sources_raw,
                                int_arguments,
                                Float64)

n_targets = floor(int_arguments["nrows"] / int_arguments["block_size"]) *
    floor(int_arguments["ncols"] / int_arguments["block_size"])

# Correct number of targets
@test size(targets)[1] == n_targets # would be less than if any of the sources
                                    # had 0 strength, but sources.asc does
                                    # not have 0's

# correct source strength for a target
block_sources = sources_raw[Int(targets[1,2] - int_arguments["block_radius"]):Int(targets[1,2] + int_arguments["block_radius"]),
                            Int(targets[1,1] - int_arguments["block_radius"]):Int(targets[1,1] + int_arguments["block_radius"])]
@test targets[1,3] ≈ sum(block_sources)
@info "target tests passed"

### Syntax tests for run_omniscape()
l, f, p = run_omniscape("input/config4.ini")
g = run_omniscape("input/config5.ini")
h = run_omniscape("input/config6.ini")
a, b, c = run_omniscape("input/config.ini")
a1, b1, c1 = run_omniscape("input/config_32bit.ini")
q, e = run_omniscape("input/config3.ini")
d = run_omniscape("input/config2.ini")
d_1 = run_omniscape("input/config2.ini")
d_2 = run_omniscape("input/config2.ini")

@test typeof(f) == Array{Float64,2}
@test typeof(g) == Array{Float64,2}
@test typeof(h) == Array{Float64,2}
@test typeof(a) == Array{Float64,2}
@test typeof(b) == Array{Float64,2}
@test typeof(c) == Array{Float64,2}
@test typeof(a1) == Array{Float32,2}
@test typeof(b1) == Array{Float32,2}
@test typeof(c1) == Array{Float32,2}
@test typeof(d) == Array{Float64,2}
@test typeof(e) == Array{Float64,2}
@test a ≈ d #parallel and serial produce same result

# Single and double produce similar results
@test a ≈ a1
@test b ≈ b1
@test c ≈ c1

# Test error throws
@info "Testing error throws"
@test run_omniscape("input/config7.ini") == nothing
@test run_omniscape("input/bad_config.ini") == nothing

GC.gc()

rm("test1", recursive = true)
rm("test1_32bit", recursive = true)
rm("test2", recursive = true)
rm("test2_1", recursive = true)
rm("test2_2", recursive = true)
rm("test3", recursive = true)
rm("test4", recursive = true)
rm("test5", recursive = true)
rm("test6", recursive = true)

@info "run_omniscape tests passed"