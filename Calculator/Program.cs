using System;
using System.Reflection; // allows to load the resource file for the localization
using System.Resources; // allow for the user of the resource manager in order to get the needed resource for localization
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;//allows for the set of a culture and language
using System.Globalization; // allows for the set of a culture and language
using System.Threading.Tasks;
using System.Text.RegularExpressions;// Add regular expressions support

namespace Calculator
{
    class Program
    {
        private static ResourceManager rm = new ResourceManager("Calculator.strings", Assembly.Load("Calculator"));// resource manager to get the proper language
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;//set UTF8 enconding in order for the data to print on the console
            //Thread.CurrentThread.CurrentUICulture = new CultureInfo("en-US");//Set up the culture and language to be used
            //Console.WriteLine(strings.String1);//display data in the strings file

            //Thread.CurrentThread.CurrentUICulture = new CultureInfo("es");//Set up the culture and language to be used
            //Console.WriteLine(strings.String1);

            Explain(); // Explain the program to the user 

            Calculator calculator = new Calculator();

            bool exitValue = false;

            string inp = "";
            while (exitValue == false) {
                Console.Write(strings.String8 + "> "); // give instructions to the user on their language
                inp = Console.ReadLine(); // wait for input from the user

                if (inp.ToUpperInvariant().Contains("UNDO"))
                {
                    calculator.Undo();
                    Console.WriteLine(calculator.Display);
                }// if the input is undo then call the undo method
                else if (inp.ToUpperInvariant().Contains("CLEAR"))
                {
                    calculator.Clear();
                    Console.WriteLine(calculator.Display);
                }
                else if (inp.ToUpperInvariant().Contains("EXIT"))
                {
                    calculator.Exit();
                    exitValue = true;
                }
                else {
                    calculator.Calculate(inp);
                    Console.WriteLine(calculator.Display);
                }

            }
           // Console.ReadLine(); //wait for the user to close the program
        }

        //This method explains the program to the user
        public static void Explain() 
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("| "+ strings.String1);//display data in the strings file
            Console.WriteLine("| "+ strings.String2);
            Console.WriteLine("| "+ strings.String3);
            Console.WriteLine("| "+ strings.String4);
            Console.WriteLine("| "+ strings.String5);
            Console.WriteLine("| "+ strings.String6);
            Console.WriteLine("| "+ strings.String7);
            Console.WriteLine("------------------------------------\n");
        }
    }
}
