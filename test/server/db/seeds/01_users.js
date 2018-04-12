exports.seed = (knex, Promise) => {
    return knex('users').insert([   
    {id: 0, username: 'dormant_certificate5990', value: 7, icon: 'https://pbs.twimg.com/media/DahJHlEVAAAy0FP.jpg:large'},
    {id: 1, username: 'liable_francise3438', value: 2, icon: 'https://pbs.twimg.com/media/DahJHlEVAAAy0FP.jpg:large'},
    {id: 2, username: 'fractional_indicator9643', value: 6, icon: 'https://pbs.twimg.com/media/DahJHlEVAAAy0FP.jpg:large'},
    {id: 3, username: 'quantative_holder7232', value: 3, icon: 'https://pbs.twimg.com/media/DahJHlEVAAAy0FP.jpg:large'}
    ])
  }