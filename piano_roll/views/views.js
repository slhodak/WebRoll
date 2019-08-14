const ControlView = {
  createRollHeader() {
    return `
      <div class="rollHeader"> 
        <div class="rollControls">
          <div class="play rollButton"><p>Play</p></div>
          <div class="pause rollButton"><p>Pause</p></div>
          <div class="stop rollButton"><p>Stop</p></div>
        </div>
        <div class="rollClock">
          <p style="display: inline">Clock:</p>
          <div class="time">0</div>
        </div>
      </div>
    `;
  },
  addListeners() {

  }
}

export { ControlView };
