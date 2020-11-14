using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Calculator
{
    public class Memento<E>
    {
        private E m_data;

        public Memento()
        {
            m_data = default(E);
        }

        public Memento(E value)
        {
            m_data = value;
        }

        public E Data
        {
            get
            {
                return m_data;
            }
            set
            {
                m_data = value;
            }
        }
    }
}
