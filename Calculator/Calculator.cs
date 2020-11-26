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
            if (_caretaker.Count > 0) { _display = strings.String13 + _caretaker.Peek().Data; }// Update the display
            else { _display = strings.String13 + _total; }
        }

        public void Undo()
        {
            // check that there is at least one element in the stack
            if (_caretaker.Count > 0)
            {
                _caretaker.Pop();
                if (_caretaker.Count != 0) { _display = strings.String13 + _caretaker.Peek().Data; }// update the display
                else { _display = strings.String13 + 0; }
            }
            else {
                _display = strings.String17;
            }
            //Todo: Finish
        }

        private Memento<double> CreateMemento() 
        {
            return new Memento<double>(_total);
        }

        public void Calculate(string expression) 
        {
            //declare variables
            double num1, num2, runningTotal, temp = 0;
            string operant;


            Memento<double> memento = new Memento<double>(); // declare memento object


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
                        if(_caretaker.Count > 0){ temp = _caretaker.Peek().Data; } 
                        runningTotal = temp + _total;
                        memento.Data = runningTotal;
                        _caretaker.Push(memento);
                        //_caretaker.Push(); // need to update the stack in order to populate the data for the undo function
                        _display = expression + " = " + _total.ToString();//update the display
                        _display = strings.String9 + _total.ToString() + "; "+ strings.String13 + runningTotal;// need to correct the format based on the rubric
                        break;
                    case "-":
                        _total = num1 - num2;
                        if (_caretaker.Count > 0){temp = _caretaker.Peek().Data;}
                        runningTotal = temp + _total;
                        memento.Data = runningTotal;
                        _caretaker.Push(memento);
                        _display = expression + " = " + _total.ToString();//update the display
                        _display = strings.String10 + _total.ToString() + "; " + strings.String13 + runningTotal;// need to correct format
                        break;
                    case "*":
                        _total = num1 * num2;
                        if (_caretaker.Count > 0){ temp = _caretaker.Peek().Data;}
                        runningTotal = temp + _total;
                        memento.Data = runningTotal;
                        _caretaker.Push(memento);
                        _display = expression + " = " + _total.ToString();//update the display
                        _display = strings.String11 + _total.ToString() + "; " + strings.String13 + runningTotal; // Need to correct format
                        break;
                    case "/":
                        if (num2 != 0)
                        {
                            _total = num1 / num2;
                            if (_caretaker.Count > 0){temp = _caretaker.Peek().Data;}
                            runningTotal = temp + _total;
                            memento.Data = runningTotal;
                            _caretaker.Push(memento);
                            _display = expression + " = " + _total.ToString();//update the display
                            _display = strings.String12 + _total.ToString() + "; " + strings.String13 + runningTotal; // Need to correct format
                        }
                        else {
                            Console.WriteLine(strings.String14);
                            _display = expression + " =  "+ strings.String15;//update the display
                        }
                        break;
                    default:
                        _display = strings.String16;//Update the display
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
            System.Environment.Exit(0); // exit the application
        }
    }
}
