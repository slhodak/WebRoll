const host = 'http://localhost:4001';

const scripts = [
  '/testScore.js',
  '../piano_roll/score.js'
];

let reference = document.getElementsByClassName('scripts')[0];

function addScripts(scripts, reference) {
  scripts.forEach(title => {
    let script = document.createElement('script');
    script.src = host + title;
    script.type = "module"
    document.body.insertBefore(script, reference);
  });
}

addScripts(scripts, reference);
