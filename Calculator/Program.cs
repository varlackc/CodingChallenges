using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;// Add regular expressions support

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Explain(); // Explain the program to the user 

            Calculator calculator = new Calculator();
            calculator.Calcuate("1.0 + 3.0");
            Console.WriteLine(calculator.Display); //4.0

            calculator.Calcuate("1.0 / 0.0");
            Console.WriteLine(calculator.Display); // Error cannot divide by zero

            calculator.Undo();
            Console.WriteLine(calculator.Display);

            Console.ReadLine(); //wait for the user to close the program
        }

        //This method explains the program to the user
        public static void Explain() 
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("| This Calculator Uses the Memento");
            Console.WriteLine("| Design pattern in order to Undo ");
            Console.WriteLine("------------------------------------\n");
        }
    }
}
