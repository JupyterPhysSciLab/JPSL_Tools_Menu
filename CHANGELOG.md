# Changelog

<!-- <START NEW CHANGELOG ENTRY> -->
<!-- <END NEW CHANGELOG ENTRY> -->
## 0.2.1 (January 26, 2025)
* BUG FIX: "Hide before print" now collapes code cells selected for 
  collapsing prior to print by the jupyter-instructortools.
* BUG FIX: Inconsistencies in capitalization between python packages and npm 
  packages was causing path problems in Jupyter. Specified all lower case 
  paths in `[tool.hatch.build.targets.wheel.shared-data]` to fix this.
## 0.2.0 (July 9, 2024)
* Initial release with the menu items: "Hide before print", "Undo hide before 
  print", "Insert 
  Algebra with Sympy initialization code", "Algebra with Sympy Docs", "Insert 
  JupyterPiDAQ initialization code", "JupyterPiDAQ Docs", "Insert PandasGUI 
  initialization code", "Insert load data from CSV code", "Insert New 
  Calculated 
  Column GUI", 
  "Insert New Plot 
  GUI", "Insert New Fit GUI", "PandasGUI Docs".

