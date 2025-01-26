# JPSL_Tools_Menu
<!-- Not yet functional
[![Github Actions Status](https://github.com/JupyterPhysSciLab/JPSL_Tools_Menu/workflows/Build/badge.svg)](https://github.com/JupyterPhysSciLab/JPSL_Tools_Menu/actions/workflows/build.yml)
-->
JLab compatible convenience menu for common activities in Jupyter Physical Science Lab.

Current menu items:
* "__Hide before print__" hides cells selected for hiding using 
  [jupyter-instructortools
  ](https://github.com/JupyterPhysSciLab/jupyter-instructortools).
* "__Undo hide before print__" reveals the hidden cells.
* "__Algebra with Sympy__" submenu:
  * "__Insert Algebra with Sympy initialization code__" inserts in place of 
    the current selection the properly formed import statement to initialize 
    the Algebra_with_Sympy package.
  * "__Algebra with Sympy Docs__" opens a new browser window showing the 
    documentation.
* "__JupyterPiDaQ__" submenu:
  * "__Insert JupyterPiDAQ initialization code__" inserts in place of the 
    current selection the properly formed import statement to initialize the 
    JupyterPiDAQ live data acquisition package.
  * "__JupyterPiDAQ Docs__" opens the documentation in a new browser window.
* "__Pandas GUI__" submenu:
  * "__Insert PandasGUI initialization code__" inserts in place of the 
    current selection the properly formed import statement to initialize the 
    PandasGUI package of graphical tools to help generate code to manipulate 
    and display data stored in [Pandas](https://pandas.pydata.org/) DataFrames.
  * "__Insert load data from CSV code__" replaces the current selection with 
    the skeleton code for loading data from a CSV file into a Pandas DataFrame.
  * "__Insert New Calculated Column GUI__" replaces the current selection 
    with a 
    function call that opens the graphical user interface to assist in 
    generating code to create a new calculated column in a Pandas DataFrame.
  * "__Insert New Plot GUI__" replaces the current selection with a function 
    call that opens the graphical user interface to generate code for making 
    a [Plotly](https://plotly.com/python/) plot from data in a Pandas DataFrame.
  * "__Insert New Fit GUI__" replaces the current selection with a function 
    call 
    that opens the graphical user interface to generate code for fitting 
    data using the [lmfit](https://lmfit.github.io/lmfit-py/) package and 
    plotting the results using Plotly.
  * "__PandasGUI Docs__" opens the documentation in a new browser window.

## Requirements

- JupyterLab >= 4.0.0
- algebra_with_sympy >= 1.0.0
- jupyterpidaq >= 0.8.1
- jupyter-pandas-gui >= 0.9.0

## Install

To install the extension, execute:

```bash
pip install JPSL_Tools_Menu
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall JPSL_Tools_Menu
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the JPSL_Tools_Menu directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
#  Optional: Watch the source directory in one terminal, automatically 
#   rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall JPSL_Tools_Menu
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `JPSL_Tools_Menu` within that folder.

### Testing the extension (not complete yet)

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)
