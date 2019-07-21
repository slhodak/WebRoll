const player = require('../server/player')();

describe('Player', () => {
  test('should have a "router" property to track client sockets relations to scores', () => {
    expect(player).toHaveProperty('router');
    expect(player.router).toBeInstanceOf(Object);
  });
  
  test.skip('should query Score event queues on each tick', () => {

  });

  test.skip('should send note messages from Score event queues in order', () => {
    
  });
});
