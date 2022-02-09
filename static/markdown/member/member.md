<!---
start: affixing
affixed: blueprint
blueprint: member-blueprint.svg
preview: member.svg
-->

# Member

<p align='center' class='md-only'>
  <img src='member-blueprint.svg'/>
</p>

> Music Circle Member

> Member adds another music circle member for Hearth. If this member is [enabled], it's voice will be sent left down the red line, and be included in the new voices of Hearth.
>
> The amount of Members tbe Emergem may have is variable. Stack  Members side by side, and you will have yourself an integrated mixer for the Emergem. Get the whole band together! Connect the audio of your instrument to Hearth, a friends electric guitar into a Member, your drummer buddy's drum mics into another members.. and then co-create a song! No expensive studios required. Use the [volume fader] to set the levels of your music circle members, and engage the Hearth 'change' knob to record a section of music. Afterwards, you can [disengage] certain Members so to configure who to record more of and/or change.

## Main Panel

<!---
start: legend
-->

<!---
start: legend-group
slug: inputs
-->

### Inputs

* <!---
  x: 10
  y: 52
  slug: member
  type: labeled-socket
  -->
  <a name="inputs-member" href='#inputs-member'>Member Voice</a> - the input of the module. The signal is sent through the [volume fader](#controls-volume-fader) and, if [observe](#controls-toggle-join-music-circle) is enabled, it will be down the red line towards Hearth.


<!---
end: legend-group
-->

<!---
start: legend-group
slug: outputs
-->

### Outputs

* <!---
  x: 10
  y: 52
  slug: song
  type: labeled-socket
  -->
  <a name="outputs-song" href='#outputs-song'>Member Song</a> - the sum of all the voices in the song which are associated with this member.


* <!---
  x: 10
  y: 52
  slug: observation
  type: labeled-socket
  -->
  <a name="outputs-observation" href='#outputs-observation'>Observed Member Song</a> - the sum of all the voices in the song which are associated with this member *and* the conductor is observing.

  > Use this to apply fx to the member recordings.

<!---
end: legend-group
-->

<!---
start: legend-group
slug: controls
-->

### Controls

* <!---
  x: 10
  y: 52
  slug: toggle-join-music-circle
  type: labeled-socket
  -->
  <a name="controls-toggle-join-music-circle" href='#controls-toggle-join-music-circle'>Toggle Join music-circle</a> - toggles whether this member is a part of the 'music-circle' of Hearth, and thus, it toggles whether the member will be recorded when performing changes to the song.


* <!---
  x: 10
  y: 52
  slug: toggle-join-music-circle
  type: labeled-socket
  -->
  <a name="controls-fader" href='#controls-fader'>Member Volume Fader</a>

<!---
end: legend-group
-->

<!---
end: legend
-->
<!---
end: affixing
-->