
    function solve(text) {
        let result = text.toUpperCase()
          .match(/[A-z0-9]+/g)
          .join(', ');
        
        console.log(result);
      }
solve('Hi, how are you?')