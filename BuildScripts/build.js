import webpack from "webpack";
import webpackconfig from "../webpack.config.prod";
import chalk from "chalk";

/*eslint-disable no-console*/
process.env.NODE_ENV="production";
console.log(chalk.blue("generating bundle files.. please wait"));
webpack(webpackconfig).run((err,status)=>{

  if(err)
  {
    console.log(chalk.red(err));
    return 1;
  }
 const jsonStatus=status.toJson();
 if(jsonStatus.hasErrors)
 {
   return jsonStatus.errors.map(error=>console.log(chalk.red(error)));
 }
 if(jsonStatus.hasWarnings)
 {
   console.log(chalk.organge("webpack generated following errors. Please review..!!"));
   console.log(jsonStatus.Warnings.map(warning=>console.log(chalk.yellow(warning))));
 }
 console.log(`webpack status:${status}`);
 console.log(chalk.green("Webpack generation completed. Your app ready for ready for production at /dist folder"));
return 0;
});
