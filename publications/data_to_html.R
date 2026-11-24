#---------------------------------------------------------#
# Code to put database of publications into HTML format
# Roemer J. Janse - last updated on 2026-03-19
#---------------------------------------------------------#

# 0 Set.up ----
# Load packages
pacman::p_load("dplyr",       # Data wrangling
               "magrittr",    # Pipelines
               "tidyr",       # Pivoting data
               "stringr",     # Working with character strings
               "purrr",       # Functional programming
               "rio",         # Data import and export
               "here",      # Local connections
               "conflicted"   # Function name conflicts
               )

# Resolve conflict
conflicts_prefer(dplyr::filter) # Between stats and dplyr

# Load data
dat <- import("https://github.com/rjjanse/rjjanse.github.io/raw/refs/heads/main/publications/data.xlsx")

# Reorder data to put newest on top
dat %<>% arrange(desc(row_number()))

# 1. Create functions ----
# Publication list structure
pub_lst <- function(study){
    # Relevant data
    dat_tmp <- filter(dat, id == study)
    
    # Get author position
    pfa <- case_match(dat_tmp[["pfa"]],
                      1 ~ "pfa-first",
                      2 ~ "pfa-second",
                      3 ~ "pfa-third",
                      0 ~ "pfa-last")
    
    # Get methodologies and topics
    filters <- dat_tmp %>% 
        # Keep only relevant columns
        select(pfap_descriptive:pfd_me) %>%
        # Pivot data
        pivot_longer(everything()) %>%
        # Keep only TRUEs
        filter(value) %>%
        # Extract array
        extract2(1) %>%
        # Set low dash to normal dash
        str_replace_all("_", "-")
    
    # Get button title
    button_title <- dat_tmp[["button_title"]]
    
    # First author
    if(dat_tmp[["first_author"]]) fa <- "<br><span class = 'highlight-author'> First author </span>" else fa <- ""
    
    # Last author
    if(dat_tmp[["last_author"]]) sa <- "<br><span class = 'highlight-author'> Senior author </span>" else sa <- ""
    
    # Create HTML
    html <- paste0("<button class ='publication-button ", pfa, " ", paste0(filters, collapse = " "), "' name = '", study, "'>",
                    button_title, fa, sa,
                    "</button>")
    
    # Return HTML
    return(html)
}

# Vector of possible headings
headings <- c("Background", "Introduction", "Aim", "Aims", "Objective", "Objectives", "Methods", "Results", "Methods and results", "Discussion", "Conclusion", "Conclusions",
              "Study design and setting", "Study design", "Setting & participants", "Selection criteria for studies", "Analytical approach", "Limitations",
              "Rationale & objective", "Rationale")

# Publication interface
pub_int <- function(study){
    # Relevant data
    dat_tmp <- filter(dat, id == study)
    
    # Get title
    title <- dat_tmp[["title"]]
    
    # Get author list and set Janse RJ to author class
    authors <- str_replace(dat_tmp[["author_list"]], "Janse RJ", "<span class = 'author'>Janse RJ</span>")
    
    # Get abstract to make headings bold, add breaks before, superscript m2 and set < to html indicator
    abstract <- dat_tmp[["abstract"]]
    
    # Set < to html indicator
    abstract <- str_replace_all(abstract, "<", "&lt;")

    # Set headings to bold and add breaks
    for(i in headings) abstract <- str_replace_all(abstract, paste0("(?<!<b>)", i, ":"), paste0("<br><b>", i, ":</b>"))
    
    # If the heading is the first, the break is not needed, so we remove it again
    abstract <- str_replace_all(abstract, "^<br>", "")
    
    # Set m2 to superscript
    abstract <- str_replace_all(abstract, "m2", "m<sup>2</sup>")
    
    # Get publication timestamp
    timestamp <- dat_tmp[["publication"]]
    
    # Get all hyperlinks that are available
    links <- paste0(sapply(c("full_text", "pubmed", "europepmc", "codes"), \(x){
        # If hyperlink is not available, then give empty string
        if(is.na(dat_tmp[[x]])) return("")
        
        # Else, go on
        else {
            # Get indicator for codes, if data is also present
            if(x == "codes" & dat_tmp[["data"]]) ind <- TRUE else ind <- FALSE
            
            # Get name
            name <- case_when(x == "full_text" ~ "Full-text",
                              x == "pubmed" ~ "PubMed",
                              x == "europepmc" ~ "EuropePMC",
                              x == "codes" & ind ~ "Codes & data",
                              x == "codes" & !ind ~ "Codes")
            
            # Write output
            return(paste0("<a target = '_blank' href = ", dat_tmp[[x]], " rel = 'noopener'>", name, "</a>"))
        }
    }), collapse = "")
    
    # Write HTML
    html <- paste0(
        "<div class = 'publication' id = '", study, "'><div class = 'pub-header' > <h2> ", title, " </h2></div><div class = 'pub-subheader'>", authors, "<br></div><div class = 'pub-main'><p>", abstract, "</p></div><div class = 'pub-footer'><i> ", timestamp, "</i><div class = 'pub-buttons'>", links, "</div></div></div>"
    )
       
    # Return html
    return(html)
}

# 2. Create HTML ----
## 2.1. Get all publication buttons ----
vec_pub_lst <- paste0(sapply(1:nrow(dat), \(index) pub_lst(dat[["id"]][[index]])), collapse = "")

## 2.2. Get all publication information ----
vec_pub_int <- paste0(sapply(1:nrow(dat), \(index) pub_int(dat[["id"]][[index]])), collapse = "")

## Combine to final output
final_html <- paste0("<div id = 'publications'><div id = 'publication-list-wrapper'><div id = 'publication-list'>", vec_pub_lst,
                     "</div></div><div id = 'publication-information'>", vec_pub_int,
                     "</div></div>")

# Write to txt file
cat(final_html, file = paste0(here("publications"), "/html.txt"))
    
    





