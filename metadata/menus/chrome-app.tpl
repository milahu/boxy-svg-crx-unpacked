<x-menuitem>
  <x-label>File</x-label>

  <x-menu>
    <x-menuitem value="new">
      <x-label>New</x-label>
      <x-shortcut class="default-shortcut" value="Control+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="newFromSelected">
      <x-label>New from Selected</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="newFromClipboard">
      <x-label>New from Clipboard</x-label>
      <x-shortcut class="default-shortcut" value="Control+Alt+Shift+N"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="open">
      <x-label>Open…</x-label>
      <x-shortcut class="default-shortcut" value="Control+O"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem id="open-recent-menu-item">
      <x-label>Open Recent</x-label>
      <x-menu id="open-recent-menu">
      </x-menu>
    </x-menuitem>

    <hr/>

    <x-menuitem value="save">
      <x-label>Save</x-label>
      <x-shortcut class="default-shortcut" value="Control+S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="saveAs">
      <x-label>Save as…</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="import">
      <x-label>Import…</x-label>
      <x-shortcut class="default-shortcut" value="Control+I"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="export">
      <x-label>Export…</x-label>
      <x-shortcut class="default-shortcut" value="Control+E"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="reloadFromDisk">
      <x-label>Reload from Disk</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="close">
      <x-label>Close</x-label>
      <x-shortcut class="default-shortcut" value="Control+W"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="quit">
      <x-label>Quit</x-label>
      <x-shortcut class="default-shortcut" value="Control+Q"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Edit</x-label>

  <x-menu>
    <x-menuitem value="undo">
      <x-label>Undo</x-label>
      <x-shortcut class="default-shortcut" value="Control+Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="redo">
      <x-label>Redo</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="cut">
      <x-label>Cut</x-label>
      <x-shortcut class="default-shortcut" value="Control+X"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="copy">
      <x-label>Copy</x-label>
      <x-shortcut class="default-shortcut" value="Control+C"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="paste">
      <x-label>Paste</x-label>
      <x-shortcut class="default-shortcut" value="Control+V"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="duplicate">
      <x-label>Duplicate</x-label>
      <x-shortcut class="default-shortcut" value="Control+D"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="delete">
      <x-label>Delete</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="selectAll">
      <x-label>Select All</x-label>
      <x-shortcut class="default-shortcut" value="Control+A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="deselectAll">
      <x-label>Deselect All</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="preferences">
      <x-label>Preferences…</x-label>
      <x-shortcut class="default-shortcut" value="Control+,"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>View</x-label>

  <x-menu>
    <x-menuitem value="manualGuides">
      <x-label>Manual Guides</x-label>
      <x-shortcut class="default-shortcut" value="F1"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="smartGuides">
      <x-label>Smart Guides</x-label>
      <x-shortcut class="default-shortcut" value="F2"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="grid">
      <x-label>Grid</x-label>
      <x-shortcut class="default-shortcut" value="F3"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="transparency">
      <x-label>Transparency</x-label>
      <x-shortcut class="default-shortcut" value="F4"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="views">
      <x-label>Views</x-label>
      <x-shortcut class="default-shortcut" value="F5"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="zoomIn">
      <x-label>Zoom In</x-label>
      <x-shortcut class="default-shortcut" value="="></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomOut">
      <x-label>Zoom Out</x-label>
      <x-shortcut class="default-shortcut" value="-"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="resetZoom">
      <x-label>Zoom Reset</x-label>
      <x-shortcut class="default-shortcut" value="\`"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="zoomToFitAllViews">
      <x-label>Zoom to Fit All Views</x-label>
      <x-shortcut class="default-shortcut" value="1"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomToFitAllObjects">
      <x-label>Zoom to Fit All Objects</x-label>
      <x-shortcut class="default-shortcut" value="2"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="zoomToFitSelectedObjects">
      <x-label>Zoom to Fit Selected Objects</x-label>
      <x-shortcut class="default-shortcut" value="3"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Object</x-label>

  <x-menu>
    <x-menuitem value="group">
      <x-label>Group</x-label>
      <x-shortcut class="default-shortcut" value="Control+G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ungroup">
      <x-label>Ungroup</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="clip">
      <x-label>Clip</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unclip">
      <x-label>Unclip</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="mask">
      <x-label>Mask</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="unmask">
      <x-label>Unmask</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="raise">
      <x-label>Raise</x-label>
      <x-shortcut class="default-shortcut" value="]"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lower">
      <x-label>Lower</x-label>
      <x-shortcut class="default-shortcut" value="["></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="raiseToFront">
      <x-label>Raise to Front</x-label>
      <x-shortcut class="default-shortcut" value="Control+]"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lowerToBack">
      <x-label>Lower to Back</x-label>
      <x-shortcut class="default-shortcut" value="Control+["></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="rotateClockwise">
      <x-label>Rotate +90°</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+ArrowRight"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="rotateCounterclockwise">
      <x-label>Rotate -90°</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+ArrowLeft"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="flipX">
      <x-label>Flip X</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+ArrowUp"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="flipY">
      <x-label>Flip Y</x-label>
      <x-shortcut class="default-shortcut" value="Control+Shift+ArrowDown"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="removeTransform">
      <x-label>Remove Transform</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="reduceTransform">
      <x-label>Reduce Transform</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Shape</x-label>

  <x-menu>
    <x-menuitem value="grabPaintColor">
      <x-label>Grab Paint Color</x-label>
      <x-shortcut class="default-shortcut" value="Q"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="reorient">
      <x-label>Reorient</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="reverse">
      <x-label>Reverse</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="unite">
      <x-label>Unite</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="subtract">
      <x-label>Subtract</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="intersect">
      <x-label>Intersect</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="exclude">
      <x-label>Exclude</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="shapeToPath">
      <x-label>Shape to Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="strokeToPath">
      <x-label>Stroke to Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="joinPaths">
      <x-label>Join Paths</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="splitPath">
      <x-label>Split Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="openPath">
      <x-label>Open Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="closePath">
      <x-label>Close Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="insetPath">
      <x-label>Inset Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="outsetPath">
      <x-label>Outset Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="simplifyPath">
      <x-label>Simplify Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="complexifyPath">
      <x-label>Complexify Path</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="joinNodes">
      <x-label>Join Nodes</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="splitNode">
      <x-label>Split Node</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="deleteNode">
      <x-label>Delete Node</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="breakNode">
      <x-label>Break Node</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Tools</x-label>

  <x-menu>
    <x-menuitem value="previousTool">
      <x-label>Previous Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="transformTool" togglable>
      <x-label>Transform Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="editTool" togglable>
      <x-label>Edit Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="panTool" togglable>
      <x-label>Pan Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="quadBezierTool" togglable>
      <x-label>Quad Bezier Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="arcTool" togglable>
      <x-label>Arc Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="cubicBezierTool" togglable>
      <x-label>Cubic Bezier Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="freehandTool" togglable>
      <x-label>Freehand Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="blobTool" togglable>
      <x-label>Blob Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="textTool" togglable>
      <x-label>Text Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="textPathTool" togglable>
      <x-label>Text Path Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="viewTool" togglable>
      <x-label>View Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="rectTool" togglable>
      <x-label>Rect Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="circleTool" togglable>
      <x-label>Circle Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ellipseTool" togglable>
      <x-label>Ellipse Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="ringTool" togglable>
      <x-label>Ring Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="pieTool" togglable>
      <x-label>Pie Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="crescentTool" togglable>
      <x-label>Crescent Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="triangleTool" togglable>
      <x-label>Triangle Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="nGonTool" togglable>
      <x-label>N-gon Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="starTool" togglable>
      <x-label>Star Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="cogTool" togglable>
      <x-label>Cog Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="arrowTool" togglable>
      <x-label>Arrow Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="crossTool" togglable>
      <x-label>Cross Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="lineTool" togglable>
      <x-label>Line Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="polylineTool" togglable>
      <x-label>Polyline Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="polygonTool" togglable>
      <x-label>Polygon Tool</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Panels</x-label>

  <x-menu>
    <x-menuitem value="fillPanel" togglable>
      <x-label>Fill Panel</x-label>
      <x-shortcut class="default-shortcut" value="F"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="strokePanel" togglable>
      <x-label>Stroke Panel</x-label>
      <x-shortcut class="default-shortcut" value="S"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="compositingPanel" togglable>
      <x-label>Compositing Panel</x-label>
      <x-shortcut class="default-shortcut" value="C"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="typographyPanel" togglable>
      <x-label>Typography Panel</x-label>
      <x-shortcut class="default-shortcut" value="T"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="geometryPanel" togglable>
      <x-label>Geometry Panel</x-label>
      <x-shortcut class="default-shortcut" value="G"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="metaPanel" togglable>
      <x-label>Meta Panel</x-label>
      <x-shortcut class="default-shortcut" value="M"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="shapePanel" togglable>
      <x-label>Shape Panel</x-label>
      <x-shortcut class="default-shortcut" value="X"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="arrangementPanel" togglable>
      <x-label>Arrangement Panel</x-label>
      <x-shortcut class="default-shortcut" value="A"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="objectsPanel" togglable>
      <x-label>Objects Panel</x-label>
      <x-shortcut class="default-shortcut" value="O"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="defsPanel" togglable>
      <x-label>Defs Panel</x-label>
      <x-shortcut class="default-shortcut" value="D"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="libraryPanel" togglable>
      <x-label>Library Panel</x-label>
      <x-shortcut class="default-shortcut" value="L"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="generatorsPanel" togglable>
      <x-label>Generators Panel</x-label>
      <x-shortcut class="default-shortcut" value="Z"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="exportPanel" togglable>
      <x-label>Export Panel</x-label>
      <x-shortcut class="default-shortcut" value="E"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="historyPanel" togglable>
      <x-label>History Panel</x-label>
      <x-shortcut class="default-shortcut" value="H"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="elementsPanel">
      <x-label>Elements Panel</x-label>
      <x-shortcut class="default-shortcut" value="I"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Window</x-label>

  <x-menu>
    <x-menuitem value="minimize">
      <x-label>Minimize</x-label>
      <x-shortcut class="default-shortcut" value="Control+M"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="maximize">
      <x-label>Maximize</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <hr/>

    <x-menuitem value="previousTab">
      <x-label>Show Previous Tab</x-label>
      <x-shortcut class="default-shortcut" value="Control+ArrowLeft"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="nextTab">
      <x-label>Show Next Tab</x-label>
      <x-shortcut class="default-shortcut" value="Control+ArrowRight"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="moveTabLeft">
      <x-label>Move Tab Left</x-label>
      <x-shortcut class="default-shortcut" value="Control+Alt+ArrowLeft"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>

    <x-menuitem value="moveTabRight">
      <x-label>Move Tab Right</x-label>
      <x-shortcut class="default-shortcut" value="Control+Alt+ArrowRight"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>

<x-menuitem>
  <x-label>Help</x-label>

  <x-menu>
    <x-menuitem value="about">
      <x-label>About</x-label>
      <x-shortcut class="default-shortcut"></x-shortcut>
      <x-shortcut class="user-shortcut"></x-shortcut>
    </x-menuitem>
  </x-menu>
</x-menuitem>