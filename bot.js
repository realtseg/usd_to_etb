const Telegraf = require ('telegraf');

const bot = new Telegraf('5512923821:AAF3fSduLoNrYwzotyuOd7JHZMc1Pvvq62M');

const welcomeText = `Hi, I am USD to ETB bot ðŸ’¸`;
const helpMessage = `
I can convert US Dollar to Ethiopian Birr.
Just send numbers only. And I will convert it to ETB based on the current rate.
/start - starts the bot
/help - instructions on bot usage
`;

bot.start((ctx) => {
    ctx.reply(welcomeText);
    ctx.reply(helpMessage);

    
})
bot.help((ctx) => {
    ctx.reply(helpMessage);
})

bot.use((ctx, next) => {
let inputusd = ctx.message.text;
var t_rate =  inputusd*53.86;
var ouputetb = t_rate.toFixed(3);
if (isNaN(t_rate) == true){
    ctx.reply("That is not a number. Please send me numbers only. " );
    
} else if(ctx.updateSubTypes[0] == "text"){
    ctx.reply("Result= " + ouputetb + " Birr");
    
} else{
    ctx.reply("That is not a number. Please send me numbers only. " );

}
next();
})



bot.launch();

// setInterval(function() {
//     console.log("test");
// }, 3000);
