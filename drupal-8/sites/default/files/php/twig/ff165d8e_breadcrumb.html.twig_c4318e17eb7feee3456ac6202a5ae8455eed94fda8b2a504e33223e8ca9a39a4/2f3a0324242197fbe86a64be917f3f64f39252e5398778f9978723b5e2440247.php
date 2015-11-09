<?php

/* core/themes/classy/templates/navigation/breadcrumb.html.twig */
class __TwigTemplate_6fe9335142cf3a7b82f2d4ca74b6da2b30fcabcb65b452dfa896fd5cbe5aa9c7 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 10
        if ((isset($context["breadcrumb"]) ? $context["breadcrumb"] : null)) {
            // line 11
            echo "  <nav class=\"breadcrumb\" role=\"navigation\" aria-labelledby=\"system-breadcrumb\">
    <h2 id=\"system-breadcrumb\" class=\"visually-hidden\">";
            // line 12
            echo $this->env->getExtension('drupal_core')->renderVar(t("Breadcrumb"));
            echo "</h2>
    <ol>
    ";
            // line 14
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["breadcrumb"]) ? $context["breadcrumb"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 15
                echo "      <li>
        ";
                // line 16
                if ($this->getAttribute($context["item"], "url", array())) {
                    // line 17
                    echo "          <a href=\"";
                    echo $this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true);
                    echo "\">";
                    echo $this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true);
                    echo "</a>
        ";
                } else {
                    // line 19
                    echo "          ";
                    echo $this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true);
                    echo "
        ";
                }
                // line 21
                echo "      </li>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 23
            echo "    </ol>
  </nav>
";
        }
    }

    public function getTemplateName()
    {
        return "core/themes/classy/templates/navigation/breadcrumb.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 23,  52 => 21,  46 => 19,  38 => 17,  36 => 16,  33 => 15,  29 => 14,  24 => 12,  21 => 11,  19 => 10,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Theme override for a breadcrumb trail.*/
/*  **/
/*  * Available variables:*/
/*  * - breadcrumb: Breadcrumb trail items.*/
/*  *//* */
/* #}*/
/* {% if breadcrumb %}*/
/*   <nav class="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">*/
/*     <h2 id="system-breadcrumb" class="visually-hidden">{{ 'Breadcrumb'|t }}</h2>*/
/*     <ol>*/
/*     {% for item in breadcrumb %}*/
/*       <li>*/
/*         {% if item.url %}*/
/*           <a href="{{ item.url }}">{{ item.text }}</a>*/
/*         {% else %}*/
/*           {{ item.text }}*/
/*         {% endif %}*/
/*       </li>*/
/*     {% endfor %}*/
/*     </ol>*/
/*   </nav>*/
/* {% endif %}*/
/* */