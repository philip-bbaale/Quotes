/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {
  weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  date=new Date;
  today=this.date.getDay()
  dayInString = this.weekDays[this.today]
   DailyQuotes= [
     {
       'DayOfWeek':'Monday',
       'DayQuote':'Today is “Make a change” Monday. Take a look at yourself. If you don’t like what you see, then devote yourself to making a change. From taking on healthier habits to learning what is best for you, taking care of yourself is always important.'
     },
     {
      'DayOfWeek':'Tuesday',
      'DayQuote':'Today is not just Tuesday. It is Transformation Tuesday. That means that success does not just come to you, you have to go out and get it. So what are you waiting for?'
    },
    {
      'DayOfWeek':'Wednesday',
      'DayQuote':'Today is “walk it off” Wednesday. If something is bothering you, walk it off by taking a walk and getting some fresh air. Then, see if there is anything you can do to resolve this issue. Sometimes, however, all we need is some time to go outside for a walk to get some air. That act alone can help us calm down.'
    },
    {
      'DayOfWeek':'Thursday',
      'DayQuote':'Today is “Therapy” Thursday. As you get to the end of your work week, think of some therapeutic methods that will help you unwind a little bit. Some ideas include going for a walk to get some fresh air or taking a nice bath with some essential oils.'
    },
    {
      'DayOfWeek':'Friday',
      'DayQuote':'Stop waiting for Friday, for summer, for someone to fall in love with you, for life. Happiness is achieved when you stop waiting for it and make the most of the moment you are in now.'
    },
    {
      'DayOfWeek':'Saturday',
      'DayQuote':'It’s not that we spend five days looking forward to just two. It’s that most people do what they enjoy most on those two days. Imagine living a life where every day are your Saturdays and Sundays. Make every day your weekend. Make every day a play-day.'    
    },
    {
      'DayOfWeek':'Sunday',
      'DayQuote':'On this special Sunday, remember to put a smile on your face and have some fun. Enjoy yourself and go out with your friends and family to show them how much you missed them during the working days.'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log("Day = " + this.date.getDay());
  }

}
