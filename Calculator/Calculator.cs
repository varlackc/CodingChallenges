using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions; // Using regular expressions

// This class calculates values that are entered as a string
namespace Calculator
{
    public class Calculator  // Originator
    {
        private double _total;
        private string _display;
        private Stack<Memento<double>> _caretaker;

        public Calculator()
        {
            _total = 0.0d;
            _caretaker = new Stack<Memento<double>>();
        }

        public void Clear()
        {
            _caretaker.Clear();
            _total = 0.0d;
            //Todo: Finish
        }

        public void Undo()
        {
            // check that there is at least one element in the stack
            if (_caretaker.Count > 0)
            {
                _caretaker.Pop();
            }
            else {
                _display = "“UNDO IS NOT AVAILABLE";
            }
            //Todo: Finish
        }

        private Memento<double> CreateMemento() 
        {
            return new Memento<double>(_total);
        }

        public void Calcuate(string expression) 
        {
            //declare variables
            double num1, num2, runningTotal;
            string operant;


            Regex regex = new Regex(@"^(-)?\d+(\.\d+)?\s[-+\*\/]\s(-)?\d+(\.\d+)?$");//Regular Expressions
            if (regex.IsMatch(expression))
            {
                //Console.WriteLine("We have a match!");

                // Gether the data
                var data = expression.Split(' ');
                num1 = Convert.ToDouble(data[0]);
                operant = data[1];
                num2 = Convert.ToDouble(data[2]);
                //Console.WriteLine("Value One: "+num1+" Operant: "+operant+ " Value Two: "+num2);

                //verify operations
                switch (operant) 
                {
                    case "+":
                        _total = num1 + num2;
                        //_caretaker.Push(); // need to update the stack in order to populate the data for the undo function
                        _display = expression + " = " + _total.ToString();//update the display
                        _display = "Sum: " + _total.ToString() + "; Running Total: " +;// need to correct the format based on the rubric
                        break;
                    case "-":
                        _total = num1 - num2;
                        _display = expression + " = " + _total.ToString();//update the display
                        break;
                    case "*":
                        _total = num1 * num2;
                        _display = expression + " = " + _total.ToString();//update the display
                        break;
                    case "/":
                        if (num2 != 0)
                        {
                            _total = num1 / num2;
                            _display = expression + " = " + _total.ToString();//update the display
                        }
                        else {
                            Console.WriteLine("Can not divide by zero");
                            _display = expression + " =  Undefined";//update the display
                        }
                        break;
                    default:
                        _display = "There seems to be an error verify your expression";//Update the display
                        break;
                }
            }
            else {
                Console.WriteLine("No match!");
            }
        }

        public string Display
        {
            get
            {
                return _display;
            }
        }
        public void Exit()
        {

        }
    }
}
