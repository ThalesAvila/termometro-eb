const parseLeadInfo = (lead, fromBoolean = false) => {
  if (lead instanceof Object !== true) {
      return
  }

  let comparison = {
      input: {
          truthy: 'true',
          falsy: 'false'
      },
      output: {
          truthy: true,
          falsy: false
      }
  }

  if(fromBoolean) {
      comparison = {
          input: {
              truthy: true,
              falsy: false
          },
          output: {
              truthy: 'true',
              falsy: 'false'
          }
      }
  }

  const parsed = Object.fromEntries(Object.entries(lead).map(pair => {
      if (pair[1] === comparison.input.truthy) {
        pair[1] = comparison.output.truthy;
      } else if (pair[1] === comparison.input.falsy) {
        pair[1] = comparison.output.falsy;
      }
      return pair;
  }));

  return parsed
}

export default parseLeadInfo 